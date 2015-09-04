code=""
s=raw_input("String:")
r=int(raw_input("Rotation:"))



for each in s:
	if str.isupper(each):
		print chr(int((ord(each)-ord('A'))+r)%26+ord('A'))
	else:
		print chr(int((ord(each)-ord('a'))+r)%26+ord('a'))
