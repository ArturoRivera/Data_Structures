class LinkedList {

  constructor() {
    this.head = null;
  }


  addNode(value) {
    var node = {
      data: value,
      next: null
    };

    if (!this.head) {
      this.head = node;
    } else {
      var p1 = this.head;
      while (p1.next) {
        p1 = p1.next;
      }
      p1.next = node;
    }
  }

}
//Creating new instance of linked list
var L1 = new LinkedList();

//Adding duplicate elements
var testData = [5,5,4];

testData.forEach(element => L1.addNode(element));


//Method for checking and removing duplicates
LinkedList.prototype.removeDuplicates = function () {
    // Empty or a single element Linked List
    if (!this.head || !this.head.next) {
      console.log('No duplicates were found. Empty or a single element Linked List.');
      return;
    }

    var p1;
    var p2;
    var nodes = {};

    p1 = this.head;
    p2 = p1.next;
    nodes[p1.data] = true;

    while (p2) {
      console.log(p2);

        var data = p2.data;
        if (nodes[data]) {
            p1.next = p2.next;
        } else {
            nodes[data] = true;
            p1 = p2;
        }
        p2 = p2.next;
    }
};

L1.removeDuplicates();
console.log(L1);
