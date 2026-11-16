export const CONTACT = { whatsapp: '491726918954', email: 'floria.luis@icloud.com' };
export function composeMessage({name='',email='',message='',english=false}){
 const intro=english?'Hello NextLevel,':'Hallo NextLevel,';
 const lines=[intro,'',english?`my name is ${name.trim()}. I would like to discuss a project with you.`:`ich bin ${name.trim()} und möchte ein Projekt mit euch besprechen.`,'',english?'My project:':'Mein Projekt:',message.trim()];
 if(email.trim())lines.push('',(english?'You can reach me at: ':'Ihr erreicht mich unter: ')+email.trim());
 lines.push('',english?'Best regards':'Viele Grüße',name.trim());
 return lines.join('\n');
}
export function contactLinks(fields){
 const body=composeMessage(fields);
 return {whatsapp:`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(body)}`,email:`mailto:${CONTACT.email}?subject=${encodeURIComponent(fields.english?'Project enquiry – NextLevel':'Projektanfrage – NextLevel')}&body=${encodeURIComponent(body)}`};
}
