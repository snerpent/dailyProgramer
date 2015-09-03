# /bash/bin/python

from sys import argv, exit

def cipher(s,r):
	for each in s:
		if each.isupper:
			print char((ord(each)-r)%26+65)
		else:
			char((ord(each)-r)%26+97)

def decipher():
	return x

options = {
	
	'cipher': cipher([argv[1]],[arg[2]]),
	'decipher': print '2'
}

if len(argv) =! 2 or argv[1] is not in options:

	print "Usage %s <%s> Number of ciphers" % (argv[0], ' | '.join(options))
	exit(1)

print options[argv[1]](x)

## usage python chE3.py cipher