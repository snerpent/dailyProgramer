from random import randint

n=int(raw_input("Number of characters:"))

print "".join(char(int(randint(0,143)+32))*n)
