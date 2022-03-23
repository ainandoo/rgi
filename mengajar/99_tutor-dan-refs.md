
## articles

https://www.reddit.com/r/Frontend/comments/qto8hm/frontend_fatigue/
https://shopify.engineering/shopify-made-patterns-in-our-rails-apps 
https://www.smashingmagazine.com/2016/11/not-an-imposter-fighting-front-end-fatigue/

## referensi

HTTP
- https://dev.opera.com/articles/http-basic-introduction/
- https://dev.opera.com/articles/http-lets-get-it-on/
- https://dev.opera.com/articles/http-response-codes/

https://owasp.org/www-pdf-archive/

https://stackoverflow.com/questions/24900411/can-my-php-login-page-be-bypass#24900547
https://www.guru99.com/learn-sql-injection-with-practical-example.html
https://www.guru99.com/sql.html
https://lab.wallarm.com/rce-in-php-or-how-to-bypass-disable_functions-in-php-installations-6ccdbf4f52bb/
https://www.secjuice.com/php-rce-bypass-filters-sanitization-waf/

# Tutorial

custom auth registration

- https://www.fundaofwebit.com/laravel-8/laravel-8-login-registration-system-tutorial
- https://www.tutsmake.com/laravel-custom-authentication-login-and-registration/
- https://www.positronx.io/laravel-custom-authentication-login-and-registration-tutorial/

multi role auth

- https://onlinewebtutorblog.com/laravel-8-multi-authentication-role-based-login-tutorial/

## Generate SSH for GitHub

instruktur@instruktur-A320MH:~$ ls -al ~/.ssh
ls: cannot access '/home/instruktur/.ssh': No such file or directory

instruktur@instruktur-A320MH:~$ ssh-keygen -t ed25519 -C "ainandoo@gmail.com"
Generating public/private ed25519 key pair.
Enter file in which to save the key (/home/instruktur/.ssh/id_ed25519): 
Created directory '/home/instruktur/.ssh'.
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /home/instruktur/.ssh/id_ed25519
Your public key has been saved in /home/instruktur/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:zS+ibjLysjgLTWrKqv3xhZe9/1yeIlVcoFyzB0smugE ainandoo@gmail.com
The key's randomart image is:
+--[ED25519 256]--+
|        E   . B. |
|         . o * =.|
|          o o + o|
|         o o   + |
|  .     S +   .  |
| +     . o . .   |
|o.. . . = o o   .|
|*oo oo.+ . + o o.|
|O+o*o=+   ..o.+..|
+----[SHA256]-----+

instruktur@instruktur-A320MH:~$ eval "$(ssh-agent -s)"
Agent pid 4641

instruktur@instruktur-A320MH:~$ ssh-add ~/.ssh/id_ed25519
Enter passphrase for /home/instruktur/.ssh/id_ed25519: 
Identity added: /home/instruktur/.ssh/id_ed25519 (ainandoo@gmail.com)

instruktur@instruktur-A320MH:~$ sudo apt update && sudo apt install xclip
instruktur@instruktur-A320MH:~$ xclip -selection clipboard < ~/.ssh/id_ed25519.pub
instruktur@instruktur-A320MH:~$ ssh-keygen -t ed25519-sk -C "ainandoo@gmail.com"Generating public/private ed25519-sk key pair.
You may need to touch your authenticator to authorize key generation.
Key enrollment failed: device not found

instruktur@instruktur-A320MH:~$ ssh -T git@github.com
The authenticity of host 'github.com (20.205.243.166)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'github.com,20.205.243.166' (RSA) to the list of known hosts.
Hi ainandoo! You've successfully authenticated, but GitHub does not provide shell access.

instruktur@instruktur-A320MH:~/Downloads/ainan/code$ cd git-ssh
instruktur@instruktur-A320MH:~/Downloads/ainan/code/git-ssh$ git init
Initialized empty Git repository in /home/instruktur/Downloads/ainan/code/git-ssh/.git/
instruktur@instruktur-A320MH:~/Downloads/ainan/code/git-ssh$ git pull git@github.com:ainandoo/latihangit.git
Warning: Permanently added the RSA host key for IP address '13.229.188.59' to the list of known hosts.
remote: Enumerating objects: 18, done.
remote: Counting objects: 100% (18/18), done.
remote: Compressing objects: 100% (11/11), done.
remote: Total 18 (delta 4), reused 12 (delta 2), pack-reused 0
Unpacking objects: 100% (18/18), 2.83 KiB | 724.00 KiB/s, done.
From github.com:ainandoo/latihangit
 * branch            HEAD       -> FETCH_HEAD

instruktur@instruktur-A320MH:~/Downloads/ainan/code/git-ssh$ git remote add origin git@github.com:ainandoo/latihangit.git
instruktur@instruktur-A320MH:~/Downloads/ainan/code/git-ssh$ git push -u origin master


## Tools

- Browser (Firefox, Chrome)
- Text Editor (VS Code, Sublime)
- Git, NodeJS

## Install Git
https://git-scm.com/

$ sudo add-apt-repository ppa:git-core/ppa
$ sudo apt update
$ git --version

## Config Git
https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup

$ git config --global user.name "Ainando Kei"
$ git config --global user.email ainandoo@gmail.com

## Starting Git

$ git init
$ git status
$ git add .
$ git status
$ git commit -m "type message"
$ git status

## Using repo

Case A: Blank/empty repository

    Create blank repository in GitHub/GitLab
    $ git init
    $ git remote add origin [url_to_repository]
    add, create some files/folders
    $ git add .
    $ git commit -m “your message”
    $ git push -u origin [master_or_branch]

Case B: Repository with content/README.md

    Create repository with README.md in GitHub/GitLab
    $ git init
    $ git remote add origin [url_to_repository]
    $ git pull [url_to_repository]
    add, edit some files/folder
    $ git add .
    $ git commit -m “your message”
    $ git push -u origin [master_or_branch]

## Create branch

$ git branch nama_branch
$ git checkout nama_branch

## GitHub Pages

## Clone repo
https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository

$ git clone https://github.com/libgit2/libgit2
git:// or user@server:path/to/repo.git

## Git ignore, diff, commit (about changes)*
https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository

## Git server
https://git-scm.com/book/en/v2/Git-on-the-Server-Getting-Git-on-a-Server#_getting_git_on_a_server

## Install NodeJS
https://nodejs.org/en/





