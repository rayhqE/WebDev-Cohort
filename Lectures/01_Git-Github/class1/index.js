function add(a, b) {
  return a + b;
}
function sub(a, b) {
  if (!(a > b)) throw new Error("num a must be greater than b ");
  return a - b;
}

add(3, 4);
add(3, 4);

sub(10, 3);

//always leave a single line at last before commit
//always write commit message in the present tense
//git log --oneline
//git diff <hash> <hash>
//git status
//git add .
//git commit -m "msg"
// git push origin main
//git remote set-url origin <url>
//git branch
//git reset --hard <hash>
//git merge feat/a ❌       git merge --squash feat/a ✅
//git checkout -b "feat/a"
// git checkout "main"

//<<Fork a repo then make some changes in it then open a pull request to the base repo ...either will be merged  or closed >> open source contribution 101 XD
//
//
//
//
//
//
//
//
//
