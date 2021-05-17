class Solution:
    # My Solution
    def reverse(self, x: int) -> int:
        isNegative = False
        stack = []
        done = False
        modVal = 1
        num = x
        result = 0
        
        if num < (-1 * 2 ** 31) or num > (2 ** 31 - 1):
            return 0
        
        if num < 0:
            isNegative = True
            num = num * -1
            
        while not done:
            if num == 0:
                break
            print(num, "%", 10, "=", num % 10)
            stack.append(num % 10)
            print("stack", stack)
            num = num // 10
            print("num", num)
                
        while len(stack) > 0:
            result += stack.pop() * modVal
            modVal = modVal * 10
            print("result", result)
        
        if isNegative:
            result = result * -1
            
        if result < (-1 * 2 ** 31) or result > (2 ** 31 - 1):
            return 0
            
        return result

    # kinda stupid way found in comments
    def reverse2(self, x: int) -> int:
        if x > 0:
            a = int(str(x)[::-1])
        if x <= 0:
            a = -1 * int(str(x*-1)[::-1])
        
        if (-2**31) <= a <= (2**31-1):
            return a
        else:
            return a