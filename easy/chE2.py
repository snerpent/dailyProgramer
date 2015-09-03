from sys import argv, exit

degree = {
		'celsius': lambda temp:((float(9)/5)*temp)+32 ,
		'fahrenheit': lambda temp:(temp- 32)*(float(5)/9)
}

if len(argv) != 3 or argv[1] not in degree:
	print "Usage %s <%s> temp" % (argv[0], ' | '.join(degree))
	exit(1)

temp = float(argv[2])
#print type(temp)
print degree[argv[1]](temp)


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