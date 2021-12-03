INDEX(countriesStr.json[]; .country) as $cid
| map( if $cid[.country] then . + $cid[.country] else empty end)
| map( {lat, long} )