::  This is a simple script that compiles the plugin using the free Flex SDK on Linux/Mac.

SET FLEXPATH="C:\Users\Owner\Desktop\fdev\flex-sdk"

echo "Compiling JW6 Plugin..."

%FLEXPATH%\bin\mxmlc .\helloworld.as -sp .\ -o .\helloworld.swf -external-library-path+=..\jw6-plugin-sdk\libs -use-network=false -static-link-runtime-shared-libraries=true

pause