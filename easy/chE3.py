# /bash/bin/python

from sys import argv
#from functools import partial

def cipher(s,r):
	code = ""
	for each in s:
		if str.isupper(each):
			code += chr(int((ord(each)-ord('A'))+r)%26+ord('A'))
		else:
			code += chr(int((ord(each)-ord('a'))+r)%26+ord('a'))
	print code


def decipher(s,r):
	decode = ""
	for each in s:
		if str.isupper(each):
			if (ord(each)-ord('A')-r) < 0:
				decode +=  chr(((ord(each)-ord('A')-r)+26)+ord('A'))
			else:
				decode += chr(((ord(each)-ord('A')-r))+ord('A'))
		else:
			if (ord(each)-ord('a')-r) < 0:
				decode += chr(((ord(each)-ord('a')-r)+26)+ord('a'))
			else:
				decode += chr(((ord(each)-ord('a')-r))+ord('a'))

	print decode

options = {
	
		'cipher': cipher,
		'decipher': decipher

	}


if len(argv) != 4 or argv[1] not in options:

	print "Usage %s <%s> Rotation" % (argv[0], ' | '.join(options))
	exit(1)

#print argv[1]

options[argv[1]](argv[2],int(argv[3]))

## usage python chE3.py cipher