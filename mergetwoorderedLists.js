// this is to merge 2 arrays

let list1=[1,5,9]
let list2=[4,8]

// var mergeTwoLists = function(list1, list2) {
//     let i=0;
//     let j=0;
//     let MergedList=[]
//     if(list1.length<1){
//         return list2
//     }
//     if(list2.length<1){
//         return list1
//     }
//     while(i<list1.length && j<list2.length){
//         if(list1[i]<list2[j] || list1[i]==list2[j]){
//             MergedList.push(list1[i]);
//             i++
//         }
//         MergedList.push(list2[j])
//         j++
//     }
//     return MergedList
// };

// console.log(mergeTwoLists(list1,list2))

// this is to merge two SLL and return head of newnode

var MergeTwoLists = function(list1, list2){
    let current= new ListNode();
    while(list1 && list2){
        if(list1.val<=list2.val){
            current.next=list1
            list1=list1.next
        }else{
            current.next=list2
            list2=list2.next
        }
        current=current.next
    }
    if(list1){
        current.next=list1
    }
    if(list2){
        current.next=list2
    }
    return current.next
};
console.log(MergeTwoLists(list1,list2))