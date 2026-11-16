import React from 'react';
const h=React.createElement;
const videos=[
 {slug:'porsche-tracked-final',title:'Porsche 911',category:'Automotive · Text Tracking'},
 {slug:'royal-five',title:'FC Royal Five',category:'Fußball · Motion Design'},
 {slug:'showcase-03',title:'Energie erklärt',category:'Motion Design · Erklärvideo'},
 {slug:'showcase-04',title:'Food & Gastro',category:'Gastronomie · Edit'},
];
export function VideoShowcase({english}) {
 return h('section',{id:'videos',className:'showcase-section'},
  h('div',{className:'showcase-heading'},h('div',{},h('p',{className:'section-label'},english?'VIDEOS & EDITS':'VIDEOS & EDITS'),h('h2',{},english?'Made to move.':'Bilder, die bewegen.')),h('p',{},english?'Press play. See the finished work.':'Play drücken. Fertige Arbeiten ansehen.')),
  h('div',{className:'video-grid'},videos.map(v=>h('article',{key:v.slug,className:'video-card'},
   h('video',{controls:true,playsInline:true,preload:'none',poster:'/assets/videos/'+v.slug+'.jpg','aria-label':v.title,onPlay:e=>document.querySelectorAll('video').forEach(video=>{if(video!==e.currentTarget)video.pause();})},h('source',{src:'/assets/videos/'+v.slug+'.mp4',type:'video/mp4'})),
   h('div',{className:'video-caption'},h('span',{},v.category),h('h3',{},v.title))
  )))
 );
}
export function AppShowcase({english}){
 const apps=[{src:'fuel-app',title:'fuelradar',desc:english?'Location search, fuel filters and price overview.':'Standortsuche, Kraftstofffilter und Preisübersicht.'},{src:'meister-app',title:'meister.',desc:english?'Jobs, daily planning and office workflows in one interface.':'Aufträge, Tagesplanung und Büro in einer Oberfläche.'}];
 return h('section',{id:'apps',className:'showcase-section'},h('div',{className:'showcase-heading'},h('div',{},h('p',{className:'section-label'},'APPS & WEB-APPS'),h('h2',{},english?'Ideas you can use.':'Ideen, die man bedienen kann.')),h('p',{},english?'A look at our app interfaces.':'Ein Blick auf unsere App-Oberflächen.')),
 h('div',{className:'app-grid'},apps.map(a=>h('article',{className:'app-card',key:a.src},h('a',{href:'/assets/photos/'+a.src+'.webp',target:'_blank',rel:'noopener noreferrer','aria-label':a.title+(english?' – view screenshot':' – Screenshot ansehen')},h('img',{src:'/assets/photos/'+a.src+'.webp',alt:a.title+' App-Oberfläche',loading:'lazy',decoding:'async',width:1206,height:2447})),h('div',{},h('h3',{},a.title),h('p',{},a.desc)))))
 );
}
