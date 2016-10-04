module.exports = function(RED) {
    function SortNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on("input", function(msg) {
            msg.payload = msg.payload.sort();

            if(config.orderBy == "za") {
            	msg.payload.reverse();
            }

            node.send(msg);
        });
    }
    RED.nodes.registerType("sort", SortNode);
}
