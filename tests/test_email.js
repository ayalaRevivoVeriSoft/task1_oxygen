email.init('ar0527167617@gmail.com', 'AYALAREVIVO1!', 'imap.gmail.com', 993, true, 3000);
var mail = email.getLastEmail(60, 'aattaa', 5000);
// log.info(mail);
// mailinator.getSubject(mail)
// if(r.attachments && r.attachments.length > 0){
//    const fs = require('fs');
//    r.attachments.map((attachment) => {
//    	let fileDescriptor;
//    	try{
//    		fileDescriptor = fs.openSync(attachment.filename, 'w');
//    	} catch(e) {
//    		throw 'could not open file: ' + e;
//    	}
   	
//    	try{
//    		fs.writeFileSync(fileDescriptor, attachment.data);
//    	} catch(e) {
//    		throw 'error writing file: ' + e;
//    	}
   	
//    	fs.closeSync(fileDescriptor);
//    });
// }

// mailinator.fetch("aattaa")