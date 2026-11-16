import React,{useState} from 'react';
import {composeMessage,contactLinks} from './contact.js';
const h=React.createElement;
export default function ContactForm({name,email,message,onName,onMail,onMsg,english=false}){
 const [prepared,setPrepared]=useState(false);
 const fields={name,email,message,english};const links=contactLinks(fields);
 const reset=handler=>e=>{setPrepared(false);handler(e);};
 return h('form',{className:'contact-form',onSubmit:e=>{e.preventDefault();setPrepared(true);}},
  h('label',{},english?'Name':'Name',h('input',{name:'name',autoComplete:'name',required:true,maxLength:100,value:name,onChange:reset(onName),placeholder:english?'Your name':'Dein Name'})),
  h('label',{},english?'Email (optional)':'E-Mail (optional)',h('input',{type:'email',name:'email',autoComplete:'email',maxLength:254,value:email,onChange:reset(onMail),placeholder:'name@firma.de'})),
  h('label',{},english?'Your project':'Dein Projekt',h('textarea',{name:'message',required:true,minLength:5,maxLength:1800,rows:4,value:message,onChange:reset(onMsg),placeholder:english?'What do you have in mind?':'Was hast du vor?'})),
  h('button',{type:'submit',className:'contact-prepare'},english?'Prepare message':'Nachricht vorbereiten'),
  prepared?h('div',{className:'prepared-message','aria-live':'polite'},
   h('label',{},english?'Your message':'Deine fertige Nachricht',h('textarea',{readOnly:true,rows:8,value:composeMessage(fields),'aria-label':english?'Prepared message':'Fertige Nachricht'})),
   h('div',{className:'contact-options'},
    h('a',{href:links.whatsapp,target:'_blank',rel:'noopener noreferrer',className:'contact-whatsapp'},english?'Open WhatsApp ↗':'WhatsApp öffnen ↗'),
    h('a',{href:links.email,className:'contact-email'},english?'Use email instead →':'Lieber per E-Mail →')),
   h('p',{},english?'Review and send the message in WhatsApp or your email app.':'Prüfe und sende die Nachricht anschließend in WhatsApp oder deinem E-Mail-Programm.')
  ):h('p',{},english?'We prepare your message. Then choose WhatsApp or email.':'Wir formulieren deine Nachricht. Danach wählst du WhatsApp oder E-Mail.')
 );
}
