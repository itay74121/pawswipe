param(
    [Parameter(Mandatory=$true)]
    [string]$commitMessage
)

$gitExe = "C:\Program Files\Git\bin\git.exe"

& $gitExe add -A
& $gitExe commit -m $commitMessage
& $gitExe push -u origin master
