msg.payload = {
    personality: msg.payload.children[0],
    needs: msg.payload.children[1],
    values: msg.payload.children[2],
};

return msg;
