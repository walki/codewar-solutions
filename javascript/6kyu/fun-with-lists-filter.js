function filter(head, p){
    let result = null; 
    if (head && p(head.data)){
        result = new Node(head.data);
        result.next = filter(head.next, p);
    } else if (head){
        result = filter(head.next, p);
    }
    return result;
}

function Node(data, next = null) {
    this.data = data;
    this.next = next;
  }

module.exports = {filter, Node};