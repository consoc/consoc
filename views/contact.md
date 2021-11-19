---
layout: layout.njk
title: Contact
contacts:
  - role: chairman
    vacant: true
  - role: president
    vacant: true
  - role: vice-chairman
    name: Adrian Pearse
    phoneDisplay: (01749) 89 0216
    phone: +441749890216
  - role: secretary
    vacant: Amanda Montague
  - role: treasurer
    name: Kevin Mitchell
    phoneDisplay: 079 6887 6440
    phone: +447968876440
  - role: membership
    vacant: true
  - role: trees
    name: Mike Smyth
    phoneDisplay: 075 3224 0620
    phone: +447532240620
  - role: planning
    name: Bill Knight
    phoneDisplay: 83 5144
    phone: +441458835144
  - role: liaison
    name: Ian Tucker
    phoneDisplay: 83 4841
    phone: +441458834841
  - role: website
    name: Sean Miller
    phoneDisplay: 
    phone: 
  - role: footpaths
    name: Mike Smyth
    phoneDisplay: 075 3224 0620
    phone: +447532240620
  - role: newsletter
    name: Ian Mutch
    phoneDisplay: 077 9974 4161
    phone: +447799744161
---

# How to contact Conservation Society committee members

<table>
<thead>
<tr>
<th scope="col">Role</th>
<th scope="col">Name</th>
<th scope="col">Email</th>
<th scope="col">Phone</th>
</tr>
</thead>
<tbody>
{% for mem in contacts %}
<tr>
<th scope="row">{{ mem.role | capitalize }}</td>
{% if mem.vacant %}
<td colspan="3" style="font-style: italic; text-align: center; opacity: 0.6;">vacancy – want to volunteer?</td>
{% else %}
<td>{{ mem.name }}</td>
<td><a href="mailto:{{ mem.role }}@glastonburyconservation.org">{{ mem.role }}@glastonburyconservation.org</a></td>
<td><a href="tel:{{ mem.phone }}">{{ mem.phoneDisplay }}</a></td>
{% endif %}
</tr>
{% endfor %}
</tbody>
</table>
