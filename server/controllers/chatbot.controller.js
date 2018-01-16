// Example 1: sets up service wrapper, sends initial message, and
// receives response.

var ConversationV1 = require('watson-developer-cloud/conversation/v1');

function chatbotReply(req, res, next) {
// Set up Conversation service wrapper.
    console.log(req.body);
    var conversation = new ConversationV1({
        username: 'a3e55a2a-7ac9-4c1a-a43c-7a8df4592b7a', // replace with username from service key
        password: 'VcVI2nOFcjgr', // replace with password from service key
        version_date: '2017-05-26'
    });
  
    conversation.message(
        {
            input: { text: req.body.msg.replace(/(\r\n|\n|\r)/gm,"") },
            workspace_id: '659b23b1-f868-4a9c-8a9b-7aead7501f41'
        },
        function(err, response) {
            if (err) {
                return res.json(err);
            } else {
                return res.json(response.output);
            }
        }
    );
}


export default { chatbotReply };