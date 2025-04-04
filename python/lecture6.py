# function and recursion

# functions in pythons
# function is a group of statement that preform a specific task
# we are using function to reduce redendency
# parameters means variable name


# def calc_sum(a,b):
#     sum = a + b
#     print(sum)
#     return sum
# calc_sum(5,10)
# calc_sum(2,8)
# calc_sum(12,17)
#function definition
# def clac_sum(a,b):  #a,b are parameters
#     return a+b

# sum = calc_sum(2,6) #function call ,2.6 values are call arguments
# print (sum)


# def print_hello():
#     print ('hello')
# print_hello()


# calculate the value of 3 numbers

# def calc_avg(a,b,c):
#     sum =(a+b+c)
#     avg = sum/3
#     print(avg)
#     return avg
# calc_avg(1,2,3)

# def calu_avg(a,b,c):
#     sum = (a+b+c)
#     avg = sum /3
#     print(avg)
#     return avg
# calu_avg(77,88,55)



# types in functions:
# there are two types of function built -in functions and userdefine functions
# print function
# print ("syed", end=" ")
# print("rahman")

# default parameters


# write a function to print the lehgth of a list
# cities = ["hyderabad","secunderabad","pune","kerla","mumbai","goa","chennai"]
# heroes = ["thor","ironman","captian america"]

# def print_len(list):
#  print(len(list))

# print_len(cities)
# print_len(heroes)






# question 2

# cities = ["hyderabad","secunderabad","pune","kerla","mumbai","goa","chennai"]
# heroes = ["thor","ironman","captian america"]

#same we need to use in function
#  print(heroes [0], end=" ")
# print(heroes [1], end= " ")

# def print_len(list):
#  print(len(list))


# def print_list(list):
#  for item in list:
#   print(item,end =" ")

# print_list(heroes)





# question 3

# n=5
# fact =1
# for i in range(n,n+1):
#     fact *= i
# print(fact)

# lest do it in function
# def cal_fact(n):
#     fact = 1
#     for i in range(1 , n+1):
#         fact *= i
#     print(fact)

# cal_fact(5)






# convert usd to inr

# def converter(usd_val):
#     inr_val = usd_val * 83
#     print(usd_val,"USD=",inr_val,"INR")

# converter(2)


# def calu_avg(a,b,c):
#     sum = (a+b+c)
#     avg = sum /3
#     print(avg)
#     return avg
# calu_avg(77,88,55)


# n =int(input("enter number you want to know:"))

# def cal_sum(n):
#     if n % 2 ==0:
#         print("even")
#     else:
#       print("odd")

# cal_sum(n)
# 32 min



# Recursion
# is a function call itself repeatedly

# def show (n):
#    if (n == 0):
#       return
#    print(n)
#    show(n-1)
#    print("END")

# show(3)


# def fact(n):
#     if (n==1 or n ==0):
#         return 1
#     return fact(n-1) * n

# print(fact(4))

# write a Recursion function to calculate the sum of n natural nmbers

# def cal_sum(n):
#     if(n == 0):
#         return 0
#     return cal_sum(n-1) + n

# sum = cal_sum(5)

# print(sum)




# wirte a Recursion function to print all the elements in a list 
# hint:use list and index as a parameter
def print_list(list,idx):
    if(idx == len(list)):
        return
    print(list[idx])
    print_list (list,idx+1)

fruits = ["mango","banana","burry","apple"]
print_list(fruits(0))
