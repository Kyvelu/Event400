module.exports = {
name: "eval",
$if: "v4",
code: `
$if[$authorID==$botOwnerID]
$eval[$message]
$else
$endif
`
}