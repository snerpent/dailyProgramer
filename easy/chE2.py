from sys import argv, exit


types = {
	
	'celsius': lambda temp: ((temp * (9/5)) + 32),
	'fahrenheit': lambda temp: ((temp - 32) * (5/9))

}

if len(argv) != 3 or argv[1] not in types:
	print "Usage %s <%s> temp" % (argv[0], ' | '.join(types))
	exit(1)

temp = map(float, argv[2])
print "test!"
print types[argv[1]](temp)


#def fahToCel(temp):
#	answer = (temp*(9/5))+32

#def celToFah(temp):
#	answer = ((temp-32)*(5/9))

#print """Temperature converter:
#(C)elsuis to Fahrenheit, or
#(F)ahrenheit to Celsius
#"""
#mode = raw_input("Which would you like to convert").lower

#if mode = 'c'

#else