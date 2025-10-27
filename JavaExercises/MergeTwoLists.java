class ListNode2 {
    int val;
    ListNode2 next;
    ListNode2(int val) { this.val = val; }
}

public class MergeTwoLists {
    public static ListNode2 mergeTwoLists(ListNode2 l1, ListNode2 l2) {
        ListNode2 dummy = new ListNode2(0);
        ListNode2 current = dummy;
        while (l1 != null && l2 != null) {
            if (l1.val < l2.val) { current.next = l1; l1 = l1.next; }
            else { current.next = l2; l2 = l2.next; }
            current = current.next;
        }
        current.next = (l1 != null) ? l1 : l2;
        return dummy.next;
    }

    public static void main(String[] args) {
        ListNode2 a = new ListNode2(1);
        a.next = new ListNode2(3);
        ListNode2 b = new ListNode2(2);
        b.next = new ListNode2(4);
        ListNode2 res = mergeTwoLists(a, b);
        while (res != null) { System.out.print(res.val + " "); res = res.next; }
    }
}
