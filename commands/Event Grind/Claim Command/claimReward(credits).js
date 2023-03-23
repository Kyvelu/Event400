module.exports = {
name: "claim",
type: 'interaction',
prototype: 'slash',
$if: "v4",
code: `
$if[$getUserVar[rewards]==0]

$else

$setUserVar[userCredits;$math[$getUserVar[userCredits]+$random[50;100]]]

$endif
`
}