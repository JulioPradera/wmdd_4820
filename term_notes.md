# command-line notes

these notes will be updated as new commands are introduced.

`ls -a`   this lists all of the files and directories in the current working
directory. the `-a` means include 'hidden' or 'dot' files, these are usually
configuration files.

`cd` is the command used to change directories. with no arguments `cd` will take
you to the home(~) directory. if for example you are in a directory that
contains another directory 'Documents' and you enter `cd Documents` you will
change directories into the Documents directory. to go back a directory `cd ..`

`mkdir` this commands creates a new directory `mkdir new_dir` will create a
directory 'new_dir' in the current working directory.

`touch` this command creates a new file `touch index.js` creates a file named
'index.js'

`cat` short for concatenate. This command is very powerful and we will see some
of the other things it can do later. for now `cat index.js` will show us the
contents of the 'index.js' file.

`rm` **warning** this command deletes a file, it doesn't move it to the trash,
it just deletes, gone forever. use `rm` with appropriate caution. `rm index.js`
will delete 'index.js'

##nano

nano is a very simple text editor used to make basic edits to files in the
command-line

`nano file.txt` opens the file file.txt

`ctrl + o` saves 'write out'  
`ctrl + x` exits  


##REPL

read evaluate print loop

typing node into the terminal with no arguments opens a JavaScript REPL

to exit the REPL `.exit` or press `ctrl + c` twice.
