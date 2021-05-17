# From https://www.youtube.com/watch?v=GJdiM-muYqc: return first recurring character of string

def recurring_character(string: str) -> str:
    chars = {}
    for char in string:
        if char in chars.keys():
            return char
        else:
            chars[char] = True
    return None
            
def main():
    print(recurring_character("adfiwddksn"))

if __name__ == "__main__":
    main()

