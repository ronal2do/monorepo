# rename all the folders and files from @boilerplate to choosed name
# delete scripts folder 
find ./packages -not \( -path '*/node_modules/**/*' -o -path '*/.next/*' \) -type f -exec sed -i '' 's/boilerplate/templatao/g' {} \;
