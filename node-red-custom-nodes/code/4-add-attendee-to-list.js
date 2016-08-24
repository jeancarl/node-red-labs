var attendeelist = global.get('attendeelist') || [];
attendeelist.push(msg.payload.name);
global.set('attendeelist', attendeelist);

return msg;
