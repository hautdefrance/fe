# _Linux_

## _Command_

> Sort alphabetically.

- **_chomd_**

- **_curl_**

- **_cp_**

- **_ds_**
  - **du -lh**：Check the device's usage

- **_du_**
  - **du -h \[filename\]**：Readable file size
  - **du -a**：Show file

- **_grep_**

- **_less_**

- **_ls_**
  - **ls -a**：Show hidden files
  - **ls -h**：Readable file size
  - **ls -l**：Show detailed info, contain file's permissions, owner, file size etc.

- **_more_**

- **_ps_**
  - **-aux**
  - **-ef**

- **ssh**
  - **-i**

- **_tail_**
  - **tail -f**
  
  
  
## Docker
  
```shell
docker ps
docker exec -it docker_name /bin/bash
ls
cd /var/
```

## _Performance Test_
  
### Vegeta
  
```shell
brew install vegeta
echo "GET https://www.gumtree.co.za.localhost:7443/" | vegeta attack -duration 10s -insecure | vegeta report
du -h unzip2.html
more unzip.html
curl -k -v https://www.gumtree.co.za.localhost:7443/ > unzip2.html
wget https://www.gumtree.co.za.localhost:7443/ -o unzip.html
```

## ab 

```shell
ab -n 100 -c 10
```

## _Fragments_

- cat & grep

```shell
sudo cat /etc/hosts | grep localhost 
```

- ssh

```shell
ssh -i ~/.ssh/xxx stack@xxx
```

- find

```shell
find /home -name "*.txt"
```

  
