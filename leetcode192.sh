# Read from the file words.txt and output the word frequency list to stdout.
sed -z 's/\s\+/\n/g' words.txt | sort | uniq -c | sort -nr | awk '{print $2" "$1}'