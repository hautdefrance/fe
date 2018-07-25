# Shell 常用指令

::: tip 排序
按照首字母顺序排名
:::

- **_chomd_**: 修改文件权限

- **_curl_**: http客户端

- **_cp_**：赋值

- **_df_**
  - **df -lh**：查看设备磁盘使用情况

- **_du_**: 读取目录下的目录大小
  - **du -h \[filename\]**：读取文件大小
  - **du -a**：读取目录下的文件和目录的大小
  - **du -h -d 1**：以容易阅读的形式显示当前目录下一级目录的size大小

- **_grep_**：你懂的~

- **_less_**

- **_lsof_**：查看某端口使用情况

- **_ls_**
  - **ls -a**：显示隐藏的文件
  - **ls -h**：易于阅读的文件size的显示
  - **ls -l**：显示详情，包含文件的权限、所有者和文件大小等

- **_more_**

- **_ps_**
  - **-aux**
  - **-ef**

- **ssh**
  - **-i**

- **_tail_**
  - **tail -f**
  
- **wget**

- **which**

- **wget**

- **source**
 
## Docker
  
```shell
docker ps
docker exec -it docker_name /bin/bash
```

## 性能测试
  
### Vegeta
  
```shell
brew install vegeta
echo "GET https://www.gumtree.co.za.localhost:7443/" | vegeta attack -duration 10s -insecure | vegeta report
du -h unzip2.html
more unzip.html
curl -k -v https://www.gumtree.co.za.localhost:7443/ > unzip2.html
wget https://www.gumtree.co.za.localhost:7443/ -o unzip.html
```

### ab 

```shell
ab -n 100 -c 10
```

## 一些小技巧

### cat & grep

```shell
sudo cat /etc/hosts | grep localhost 
```

### ssh

```shell
ssh -i ~/.ssh/xxx stack@xxx
```

### find

```shell
find /home -name "*.txt"
```

### grep 的前后匹配

```sh
grep -C 5 foo file  # 显示file文件中匹配foo字串那行以及上下5行
grep -B 5 foo file  # 显示foo及前5行
grep -A 5 foo file  # 显示foo及后5行
```

### 查看当前目录文件的数量

``` sh 
ls -l | grep "^-" | wc -l
```

### 查看当前目录子目录的数量

``` sh 
ls -l | grep "^d" | wc -l
```

### tree

- 方案一

```bash
find . -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'
```

或者定义别名

```bash
alias tree="find . -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'"
```

- 方案二

使用 `homebrew` 安装 tree：
```
brew install tree
```



