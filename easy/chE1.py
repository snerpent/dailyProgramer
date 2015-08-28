import sys
import os


name = raw_input("Name please.")
age = raw_input("How old are you?")
user = raw_input("What's your reddit username, pleb?")

#stdout screen
print """Your name is %s, you are %d years old, and your username is %r.
""" % (name, age, user)

#stdout in file
#a for append, w for write(will overwrite file)
out = open("info.txt", 'a')

line = " %s %d %r" % (name, age, user)
out.write(line)
out.close
