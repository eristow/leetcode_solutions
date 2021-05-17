# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    # My Solution
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        num1 = 0
        num2 = 0
        result = 0
        revResult = 0
        multVal = 1
        list1Done = False
        list2Done = False
        
        node1 = l1
        node2 = l2
        while 1:
            if not list1Done:
                num1 += node1.val * multVal
            if not list2Done:
                num2 += node2.val * multVal
            if node1.next:
                node1 = node1.next
            else:
                list1Done = True
            if node2.next:
                node2 = node2.next
            else:
                list2Done = True
                
            multVal = multVal * 10
            
            if list1Done and list2Done:
                break
            print("num1", num1)
            print("num2", num2)
            
        result = num1 + num2
        print("result", result)
        
        headNode = ListNode(result % 10)
        result = result // 10
        
        currentNode = headNode
        while 1:
            if result == 0:
                print("hit break")
                break
            
            tempNode = ListNode(result % 10)
            currentNode.next = tempNode
            currentNode = currentNode.next

            result = result // 10
            
        return headNode

    # Convert to lists to ints, perform addition, convert result to list (I like this implementation)
    def to_int(l: ListNode):
        s = ''
        while l != None:
            s += str(l.val)
            l = l.next
        return int(s[::-1])
    
    def to_list(n: int):
        s = str(n)[::-1]
        head = prev = None
        for ch in s:
            node = ListNode(int(ch))
            if prev is not None:
                prev.next = node
            prev = node
            if head is None:
                head = prev
        return head
    
    def addTwoNumbers2(self, l1: ListNode, l2: ListNode) -> ListNode:
        a = Solution.to_int(l1)
        b = Solution.to_int(l2)
        return Solution.to_list(a + b)

    # Short way of doing above (I don't like this one because the result is list, not ListNode)
    def addTwoNumbers3(self, l1: ListNode, l2: ListNode) -> ListNode:
        str_l1, str_l2 = '', ''
        while l1:            
            str_l1 += str(l1.val)
            l1 = l1.next
        while l2:            
            str_l2 += str(l2.val)
            l2 = l2.next
        int_l1 = int(str_l1[::-1])
        int_l2 = int(str_l2[::-1])       
        return list(map(int, str(int_l1 + int_l2)[::-1]))
