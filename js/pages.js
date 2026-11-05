(function () {
  'use strict';
  const c=window.VELMONT_CONTENT, ui=window.VELMONT_UI, root=document.getElementById('page-content');
  if(!c || !ui || !root) return;
  const e=ui.escapeHTML, params=new URLSearchParams(location.search);
  const a=(url,label)=>`<a class="text-link" href="${e(url)}">${e(label)} <span aria-hidden="true">→</span></a>`;
  const links=items=>items?.length?`<div class="page-links">${items.map(x=>a(x.url,x.label)).join('')}</div>`:'';
  const card=x=>`<article class="content-card"><h3>${e(x.title)}</h3><p>${e(x.text || x.detail || x.description)}</p></article>`;
  const hero=(title,intro,kicker)=>`<section class="page-hero"><div class="container"><nav aria-label="Breadcrumb"><ol class="breadcrumb"><li><a href="index.html">Home</a></li><li aria-hidden="true">/</li><li>${e(kicker)}</li></ol></nav><span class="section-kicker">${e(kicker)}</span><h1>${e(title)}</h1><p class="page-lede">${e(intro)}</p></div></section>`;
  const section=(id,title,body,tone='')=>`<section id="${e(id)}" class="page-section ${tone}"><div class="container"><h2>${e(title)}</h2>${body}</div></section>`;
  const notice=()=>`<p class="review-note">${e(c.status)}</p>`;
  const degreeLinks=level=>links(c.academicPortfolio.programs.filter(p=>!level||p.level===level).map(p=>({url:p.url,label:p.title})));
  const table=()=>`<div class="table-scroll"><table class="cost-table"><caption>Planned tuition by degree level — tuition only</caption><thead><tr><th scope="col">Degree level</th><th scope="col">Credits</th><th scope="col">Planned tuition</th><th scope="col">Delivery</th></tr></thead><tbody><tr><th scope="row">Bachelor’s degrees</th><td>120</td><td>$45,000</td><td>Semester terms; online instruction; required partner-site internship</td></tr><tr><th scope="row">Master’s degrees</th><td>36</td><td>$20,000</td><td>Semester terms; online instruction</td></tr></tbody></table></div>`;
  function generic(p){
    root.innerHTML=hero(p.title,p.intro,p.kicker)+p.sections.map((s,i)=>section(s.id,s.title,
      `${s.tuitionTable?table()+degreeLinks():''}${s.costSchedule?`<div class="table-scroll"><table class="cost-table"><caption>Cost schedule status</caption><thead><tr><th scope="col">Cost component</th><th scope="col">Published amount / status</th></tr></thead><tbody>${s.cards.map(x=>`<tr><th scope="row">${e(x.title)}</th><td>${x.title==='Program tuition'?'Bachelor’s: $45,000 / 120 credits; master’s: $20,000 / 36 credits. Tuition only.':'Not yet determined; not assumed to be zero.'}</td></tr>`).join('')}</tbody></table></div>`:''}${s.text?`<p>${e(s.text)}</p>`:''}${s.cards?s.numbered?`<ol class="journey-steps">${s.cards.map((x,j)=>`<li class="content-card"><span class="journey-step" aria-hidden="true">${j+1}</span><h3>${e(x.title)}</h3><p>${e(x.text)}</p></li>`).join('')}</ol>`:`<div class="decision-cards">${s.cards.map(card).join('')}</div>`:''}${s.items?`<ul class="focus-list">${s.items.map(x=>`<li>${e(x)}</li>`).join('')}</ul>`:''}${links(s.links)}`,i%2?'section--warm':'' )).join('')+section('planning-status','Planning status',notice());
    if(p.numberedStages){p.sections.slice(0,6).forEach((s,i)=>{const heading=document.querySelector(`#${s.id} h2`);heading.textContent=`${i+1}. ${s.title}`;});}
  }
  function programCard(p){return `<article class="program-card"><span class="status-badge">Planned for Fall 2029</span><h3>${a(p.url,p.title)}</h3><p>${e(p.college)}</p><p>${e(p.description)}</p><p><strong>${p.level==='undergraduate'?'120 credits · $45,000 planned tuition only':'36 credits · $20,000 planned tuition only'}</strong></p><p>Semester terms; online instruction${p.level==='undergraduate'?'; required partner-site internship':''}. Other expenses separate.</p></article>`;}
  function programs(){
    const all=c.academicPortfolio.programs;
    const unique = (records, key) => [...new Set(records.map(program => program[key]))];
    const levelLabel = level => c.academicPortfolio[level]?.label || level;
    const collegeLabel = id => all.find(program => program.collegeId === id)?.college || id;
    const optionHTML = (values, label) => values.map(value => `<option value="${e(value)}">${e(label(value))}</option>`).join('');
    root.innerHTML=hero('Explore planned degree programs.','Velmont University plans to launch six bachelor’s degrees and two master’s degrees in Fall 2029. Explore each program’s focus, concentrations and possible career directions. Programs remain subject to academic review, required approvals and launch readiness.','Programs')+section('program-directory','Degree programs',`<p>Bachelor’s degrees: 120 credits; $45,000 planned tuition; semester terms; online instruction with a required partner-site internship.</p><p>Master’s degrees: 36 credits; $20,000 planned tuition; semester terms; online instruction.</p><p>Tuition excludes required fees and other study expenses. Program durations and detailed curricula will be published when finalized.</p><form id="program-filters" class="program-filters" role="search" aria-label="Filter planned programs"><label>Study level<select name="level"><option value="all">All degree levels</option>${optionHTML(unique(all, 'level'), levelLabel)}</select></label><label>College<select name="college"><option value="all">All colleges</option>${optionHTML(unique(all, 'collegeId'), collegeLabel)}</select></label><label>Subject<select name="subject"><option value="all">All subjects</option>${optionHTML(unique(all, 'subject'), value => value)}</select></label><button type="reset" class="btn btn--secondary">Reset filters</button></form><p id="program-count" role="status"></p><div id="degree-results" class="program-grid catalog-grid"></div>`)+section('colleges','Explore our planned colleges',links(c.colleges.map(x=>({label:x.title,url:x.url}))))+section('planning-status','Planning status',notice());
    const form=document.getElementById('program-filters');
    for(const name of ['level','college','subject']){const value=params.get(name);if(value&&[...form.elements[name].options].some(o=>o.value===value))form.elements[name].value=value;}
    const fields = { level: form.elements.level, college: form.elements.college, subject: form.elements.subject };
    function setOptions(field, values, defaultLabel, label) {
      const previous = field.value;
      const options = [new Option(defaultLabel, 'all'), ...values.map(value => new Option(label(value), value))];
      field.replaceChildren(...options);
      field.value = values.includes(previous) ? previous : 'all';
    }
    function update(changed) {
      const previousSubject = fields.subject.value;
      // Keep the most recently changed parent; clear an incompatible other parent.
      if (fields.level.value !== 'all' && fields.college.value !== 'all' &&
          !all.some(program => program.level === fields.level.value && program.collegeId === fields.college.value)) {
        fields[changed === 'college' ? 'level' : 'college'].value = 'all';
      }
      setOptions(fields.level, unique(all.filter(program => fields.college.value === 'all' || program.collegeId === fields.college.value), 'level'), 'All degree levels', levelLabel);
      setOptions(fields.college, unique(all.filter(program => fields.level.value === 'all' || program.level === fields.level.value), 'collegeId'), 'All colleges', collegeLabel);
      const context = all.filter(program => (fields.level.value === 'all' || program.level === fields.level.value) && (fields.college.value === 'all' || program.collegeId === fields.college.value));
      setOptions(fields.subject, unique(context, 'subject'), 'All subjects', value => value);
      const rows = context.filter(program => fields.subject.value === 'all' || program.subject === fields.subject.value);
      const subjectReset = previousSubject !== 'all' && fields.subject.value === 'all';
      document.getElementById('program-count').textContent = `${rows.length} planned degree${rows.length === 1 ? '' : 's'}` + (subjectReset ? '. Subject reset to All subjects because it is unavailable for this level and college.' : '');
      document.getElementById('degree-results').innerHTML = rows.length ? rows.map(programCard).join('') : '<p>No planned programs match this combination. Change a filter or reset the filters to explore all planned programs.</p>';
      const query = new URLSearchParams();
      for (const name of ['level','college','subject']) if (fields[name].value !== 'all') query.set(name, fields[name].value);
      history.replaceState(null, '', 'programs.html' + (query.size ? '?' + query : '') + location.hash);
    }
    form.addEventListener('change', event => update(event.target.name));
    form.addEventListener('submit', event => event.preventDefault());
    form.addEventListener('reset', event => {
      event.preventDefault();
      for (const field of Object.values(fields)) field.value = 'all';
      update();
    });
    update();
  }
  function degree(){
    const p=c.academicPortfolio.programs.find(x=>x.id===document.body.dataset.record);if(!p)return;
    const college=c.colleges.find(x=>x.id===p.collegeId), bachelor=p.level==='undergraduate';
    root.innerHTML=hero(p.title,'Planned for Fall 2029. '+p.tuition,'Planned degree')+
      section('overview','Program Overview',`<p>${e(p.description)}</p>${a(college.url,college.title)}`)+
      section('learning','What You Will Learn',`<p class="review-note">Draft learning outcomes for academic review; these are not approved outcomes.</p><ul class="focus-list">${p.outcomes.map(x=>`<li>${e(x)}</li>`).join('')}</ul>`,'section--warm')+
      (bachelor?section('concentrations','Concentrations',`<p class="review-note">Planned concentrations, subject to academic review.</p><div class="copy-grid">${p.concentrations.map(card).join('')}</div>`):'')+
      section('applied-learning','Applied Learning',`<p>${e(p.applied)}</p>`,'section--warm')+
      (bachelor?section('internship','Internship',`<p>${e(p.internship)}</p>${a('internships.html','Internships')}`):'')+
      section('curriculum','Curriculum and Study Plan',`<p>Detailed curricula, prerequisites, course sequencing and study requirements are being finalized. No approved course list or completion duration is published in this preview.</p>${a('admissions.html','Admissions')}`,'section--warm')+
      section('admissions','Admissions',`<p>Detailed entry requirements and location availability are being finalized. Admissions are not currently open.</p>${a('admissions.html','Admissions Overview')}`)+
      section('tuition','Tuition and Study Planning',`<p>${e(p.tuition)}</p>${links([{label:'Tuition and Fees',url:'tuition-fees.html'},{label:'Transfer Credit and Prior Learning',url:'transfer.html'}])}`,'section--warm')+
      section('careers','Career Directions',`<p>${e(p.careers)}</p>${a('careers.html','Career Services')}`)+
      section('program-status','Program Status and Next Steps',`<p>${e(c.programClosing)}</p>${links([{label:'All Programs',url:'programs.html'},{label:college.title,url:college.url}])}`,'section--warm');
  }
  function college(){const x=c.colleges.find(x=>x.id===document.body.dataset.record);if(!x)return;root.innerHTML=hero(x.title,x.description,'Planned college')+section('degrees','Planned degree programs',`<div class="program-grid catalog-grid">${c.academicPortfolio.programs.filter(p=>p.collegeId===x.id).map(programCard).join('')}</div>`)+section('tuition','Planned tuition by level',table()+'<p>Tuition only; required fees and other expenses separate. Program durations will be published when finalized.</p>'+a('tuition-fees.html','Tuition and Fees'),'section--warm')+section('status','Program status',notice());}
  const page=document.body.dataset.page;
  if(page==='programs')programs();else if(page==='degree')degree();else if(page==='college')college();else if(c.pages[page])generic(c.pages[page]);
  if(location.hash){const target=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(target)requestAnimationFrame(()=>target.scrollIntoView());}
})();
