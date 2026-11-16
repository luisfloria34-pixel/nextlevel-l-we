import React from 'react';
const h=React.createElement;
export function ProjectBrands({english}) {
 return h('div',{className:'project-brands','aria-label':english?'Selected projects and video subjects':'Ausgewählte Projekte und Videomotive'},
  h('a',{href:'#videos',className:'project-brand'},h('span',{className:'brand-royal',role:'img','aria-label':'FC Royal Five'}),h('small',{},'FC Royal Five')),
  h('a',{href:'#apps',className:'project-brand'},h('span',{className:'brand-fuel'},'fuelradar'),h('small',{},'App')),
  h('a',{href:'#apps',className:'project-brand'},h('span',{className:'brand-meister',role:'img','aria-label':'meister.'}),h('small',{},'App')),
  h('a',{href:'#videos',className:'project-brand'},h('img',{src:'/assets/logos/porsche.svg',alt:'Porsche',width:180,height:12}),h('small',{},english?'Video subject · 911':'Videomotiv · 911'))
 );
}
