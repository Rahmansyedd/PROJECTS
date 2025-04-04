# string1 = "this is string.\n and it was created in python"
# print(string1)

# str1 = "lap"
# str2 = "top"
# final_str = str1+str2
# print (final_str)

# length

# str1 = "lap"
# str2 = "top"
# len1 = len(str1)

# str2 = "top"
# final_str = str1+" " + str2
# print(len(str1))
# print(final_str)
# print(len(final_str))


# indexing:

# str = "syedrahman"
# chr = str[3]
# print(str[4])


# slicing: accessing  part of a string

# str = "syedrahman"
# print(str [4:]) #[4:len(str)]

# slicing negative index:

# str ="apple"
# print(str[-5:-2])

# string functions :
# endswith 

# str = "i am learing python from onlin classes"
# print(str.endswith("ses"))

#capitalize finction

# str = "i am learing python from onlin classes"
# print(str.capitalize())
# if i want to change in my original string mens

# str = str.capitalize()
# print(str)

# replace finction
# str = "i am learing python from onlin classes"
# print(str.replace("python","javascript"))

# find function:
# str = "i am learing python from onlin classes"
# print(str.find("from"))

# count finction:
# str = "i am learing python from onlin classes"
# print(str.count("s"))


#task question
# name = input("enter your name:")
# print("WELCOME",name)
# print("length of your name is",len(name))

# str = "syeds"
# print(str.count("s"))



# conditional statement:

# light  = "blue"

# if(light == "red" ):
#     print("stop")
# elif(light == "green"):
#     print("go ")
# elif(light == "yellow"):
#     print("wait")

# else:
#     print(" light is broken")



# num = 4

# if (num >2):
#     print("greater than two")

# elif (num >3):
#     print("greater than three")

# we can take if ans else statement as well

# age =16

# if(age >= 18):
#     print("eligble for vote")
# else:
#     print("notelgible for voting")



# marks = int(input("Enter Student Marks : "))

# if (marks >= 90):
#      grade = "A"
# elif (marks >= 80 and marks < 90):
#      grade = "B"
# elif (marks >= 70 and marks < 80):
#      grade = "C"
# else:
#     grade = "D"

# print("GRADE OF THE STUDENT IS=",grade)


# nesting :

# age =17

# if(age >=18):
#     if(age >=80):
#         print("cant deive")
#     else:
#         print(" can drive")
# else:
#     print("cant drive")


# practics quetions

num = int(input("write number:"))

# rem =num %2
if (num == 0):
    print("even number")
else:
    print("odd number")



a = int(input("write  first number:"))
b = int(input("write  second number:"))
c = int(input("write  third number:"))

if(a>=b and a>=c):
    print("a is great")
elif(b>=c):
    print("b is greater")
else:
    print("c is grestest")
    

num = int(input("write number:"))

if (num %7 ==0):
    print("multipul of 7")
else:
    print("not a multiple")

