# file {i/o} input and output in python
# python can  be use to preform operations on a file (read and wirte or update data)
# how can we open a file ,read file ,update a file close a file. and delete a file.
# types of files:  text files =>.txt,.docx,.log etc 
# binary fiels:.mp4,.mov, .png , .jep etc.

# #operations in files 
# to open files in python :f=open("file_name","mode") i.e f= open("python4.py","r")

# f= open("lecture_4.py","r")
# data = f.read
# print(data)
# print(type(data))
# f.close()  #for closing open file

# read method in files
# f= open("lecture_4.py","r")
# line1 =f.readline()
# print(line1)

# f.close()

# for reading file line by line will Use data=f.readline()

# writing to a file  w= write mode and a = append mode add at the end

# f = open("demo.txt","w")
# f.write("my name is syed rahman and i am learning python tho complete my gravati ai course")
# f.close

# for append mood
# f = open("demo.txt","a")
# f.write("\nthen i will move to gen ai")
# f.close
# 25min

# with open ("demo.txt",'r') as f:
#     data = f.read()
#     print(data)

# how to delete files 
# import os

# os.remove("demo.txt")


# using os module what ever you want to install inpython use pip install   ::pip3 use if pip is not working



# q-1
# create a new file "practise.txt" using python add following data

# with open("sample.txt","w") as f:
#   f.write("  hi every on \n we are learning\n")
#   f.write("  using java \n i like doing java\n")

# whant to replave java tith python in file
# with open("sample.txt","r") as f: 
#  data = f.read()
#  new_data = data.replace("java","python")
#  print(new_data)

# with open("sample.txt","w") as f: 
#  data = f.write(new_data)
#  print(data)


# want to find somthing in file example learning in function
# def check_for_word():
#     word = "learning"
#     with open("sample.txt","r") as f:
#      data = f.read()
#     if (data.find(word) != -1) :
#         print("found")
#     else:
#        print("not found")

# check_for_word()

# waf to find in which line of the file does the word "learning" occur first
# print -1 for word not fond

def check_for_line():
    word = "learning"
    data = True
    line_num = 1
    with open("sample.txt","r") as f:
     while data:
        data = f.readline()
        if ( word in data ) :
            print(line_num)
            return
        line_num += 1

    return -1
check_for_line()
# 43min
           
       





