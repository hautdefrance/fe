# Shell知识点汇总

## 变量

### 定义：

``` bash
my_var="var" # 中间不能有空格
```

### 获得值

``` bash
echo $my_var
echo ${my_var} (推荐)
```

### let 

让 `bash` 能够进行算数运算的操作：

``` bash
let index=${index}+1
```

## 数组

### 定义数组

``` bash
arr=()
arr=(1 2 3 4)
```

## 数组赋值

``` bash
arr[0]="0"
```

::: warning 注意
- `echo "${arr}"` 只会输出第一个元素
- `echo "${arr[@]}"` 输出所有元素，或者使用 `echo "${arr[*]}"`
:::

## 运算符

### 算数运算符

![image](https://user-images.githubusercontent.com/23133919/38467709-e30a162c-3b6e-11e8-99c4-1fdeaed022fc.png)

### 关系运算符

关系运算符只支持数字，不支持字符串，除非字符串的值是数字。

![image](https://user-images.githubusercontent.com/23133919/38467731-3fd1b40a-3b6f-11e8-8191-eca04104cb94.png)

### 布尔运算符 

![image](https://user-images.githubusercontent.com/23133919/38467734-46240f2e-3b6f-11e8-96a4-b2600762a1b1.png)

### 字符串运算符 

![image](https://user-images.githubusercontent.com/23133919/38467737-4d34b0de-3b6f-11e8-81f0-ac3ce69f918b.png)

### 文件测试运算符 

![image](https://user-images.githubusercontent.com/23133919/38467740-54dbfd38-3b6f-11e8-9e4b-56fe842d9b89.png)

```
[ -a FILE ] 如果 FILE 存在则为真。
[ -d FILE ] 如果 FILE 存在且是一个目录则为真。
[ -f FILE ] 如果 FILE 存在且是一个普通文件则为真。
```

## 颜色

``` bash
　　echo -e “\033[30m 黑色字 \033[0m” 
　　echo -e “\033[31m 红色字 \033[0m” 
　　echo -e “\033[32m 绿色字 \033[0m” 
　　echo -e “\033[33m 黄色字 \033[0m” 
　　echo -e “\033[34m 蓝色字 \033[0m” 
　　echo -e “\033[35m 紫色字 \033[0m” 
　　echo -e “\033[36m 天蓝字 \033[0m” 
　　echo -e “\033[37m 白色字 \033[0m” 

　　echo -e “\033[40;37m 黑底白字 \033[0m” 
　　echo -e “\033[41;37m 红底白字 \033[0m” 
　　echo -e “\033[42;37m 绿底白字 \033[0m” 
　　echo -e “\033[43;37m 黄底白字 \033[0m” 
　　echo -e “\033[44;37m 蓝底白字 \033[0m” 
　　echo -e “\033[45;37m 紫底白字 \033[0m” 
　　echo -e “\033[46;37m 天蓝底白字 \033[0m” 
　　echo -e “\033[47;30m 白底黑字 \033[0m” 
```

## 技能点

- 计算数组的长度：

`${#array[@]}` 

::: warning
`${#array}` 只是返回第一个元素的长度！
:::


- 遍历数组的正确姿势：

``` bash
for file in ${all_bashes[@]}
do
    echo "${index} - ${file}"
    let index=${index}+1
done
```

- 空格

``` bash
[[:space:]]
```

- 检测第一个参数是否不为空

``` bash
if [ -n "$1" ] # 必须加上 “”
```

- 获取字符串长度

``` bash
echo ${#1}
```

- 字符串截取

`##` 号截取，删除左边字符，保留右边字符。

``` bash
echo ${var##*/}
```

`## %`号截取，删除右边字符，保留左边字符


- 字符串包含关系

``` bash
strA="helloworld"
strB="low"
if [[ $strA =~ $strB ]]
then
  echo "包含"
else
  echo "不包含"
fi
```
￼
## 参考链接

- [Shell脚本编程30分钟入门](https://github.com/qinjx/30min_guides/blob/master/shell.md)
- [Bash tips: Colors and formatting](https://misc.flogisoft.com/bash/tip_colors_and_formatting)
- [commands](http://man7.org/linux/man-pages/dir_section_1.html)
- [read](http://man7.org/linux/man-pages/man1/read.1p.html)
