(function () {
  'use strict';
  const c=window.VELMONT_CONTENT;
  const get=path=>path.split('.').reduce((v,k)=>v&&v[k],c);
  const flatten=value=>typeof value==='string'?value:Array.isArray(value)?value.map(flatten).join(' '):value&&typeof value==='object'?Object.entries(value).filter(([k])=>!['id','url','route','anchor','statusSource','textSource','titleSource','jumps'].includes(k)).map(([,v])=>flatten(v)).join(' '):'';
  const normalize=s=>s.toLowerCase().replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
  function entries(){
    const urls={about:'about.html',admissions:'admissions.html',tuition:'tuition-fees.html',scholarships:'scholarships.html',transfer:'transfer.html',studentSupport:'student-support.html',studentSuccess:'student-success.html',careers:'careers.html',internships:'internships.html',studentOutcomes:'student-outcomes.html',model:'academic-model.html',studentInformation:'student-information.html',contact:'contact.html',policies:'policies.html'};
    const rows=[];
    Object.entries(c.pages).forEach(([key,p])=>{rows.push({title:p.title,category:p.kicker,url:urls[key],text:p.intro,keywords:key});p.sections.forEach(s=>rows.push({title:s.title,category:p.kicker,url:urls[key]+'#'+s.id,text:flatten(s),keywords:key}));});
    c.colleges.forEach(p=>rows.push({title:p.title,category:'College',url:p.url,text:flatten(p),keywords:'college planned'}));
    c.academicPortfolio.programs.forEach(p=>rows.push({title:p.title,category:'Planned degree',url:p.url,text:flatten(p),keywords:p.level+' '+p.subject}));
    rows.push({title:'Planned first enrollment: Fall 2029',category:'University Status',url:'about.html#university-status',text:c.status,keywords:'launch opening enrollment admissions'});
    return rows;
  }
  function search(query){
    const words=normalize(query).split(' ').filter(Boolean);if(!words.length)return [];
    return entries().map(row=>{const title=normalize(row.title+' '+row.keywords),body=normalize(row.text);let score=0;words.forEach(w=>{if(title.split(' ').includes(w))score+=10;else if(w.length>2&&title.split(' ').some(t=>t.startsWith(w)))score+=5;else if(body.split(' ').some(t=>t===w||t.startsWith(w)))score++;});return {...row,score};}).filter(r=>r.score>0).sort((a,b)=>b.score-a.score).slice(0,20);
  }
  window.VELMONT_SEARCH={entries,search,get};
  const input=document.getElementById('site-search');if(!input)return;
  const results=document.getElementById('search-results'),status=document.getElementById('search-status'),e=window.VELMONT_UI.escapeHTML;
  function update(){const query=input.value.trim();if(!query){status.textContent='Try tuition, bachelor, master, internship, Illinois, transfer or returning to study.';results.innerHTML='';return;}
    const rows=search(query);status.textContent=rows.length?`${rows.length} results`:'No matching information. Try a shorter phrase or a topic such as cost, programs or admissions.';
    results.innerHTML=rows.map(r=>`<li class="content-card"><span class="section-kicker">${e(r.category)}</span><h2><a href="${e(r.url)}">${e(r.title)}</a></h2><p>${e(r.text.slice(0,210))}${r.text.length>210?'…':''}</p></li>`).join('');
  }
  input.addEventListener('input',update);document.getElementById('search-form').addEventListener('submit',event=>{event.preventDefault();update();});update();
})();
