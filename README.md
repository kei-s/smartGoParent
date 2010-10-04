# smartGoParent
JavaScript Utility for get parent URL

## Code
src/smartGoParent.js

## Spec
spec/SmartGoParentSpec.js

use Jasmine ( http://pivotal.github.com/jasmine/ )

## Usage
getParent(url, count) returns parent URL like below.

  * http://www.example.com/path/to/file.txt?query=value#anchor
  * http://www.example.com/path/to/file.txt?query=value
  * http://www.example.com/path/to/file.txt
  * http://www.example.com/path/to/
  * http://www.example.com/path/
  * http://www.example.com/
  * http://example.com/
