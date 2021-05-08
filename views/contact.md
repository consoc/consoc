---
layout: layout.njk
title: Contact
contacts:
  - role: chairman
    vacant: true
  - role: president
    name: John Brunsdon
    phoneDisplay: 83 1283
    phone: +441458831283
  - role: vice-chairman
    name: Adrian Pearse
    phoneDisplay: (01749) 89 0216
    phone: +441749890216
  - role: secretary
    vacant: true
  - role: treasurer
    name: Kevin Mitchell
    phoneDisplay: 079 6887 6440
    phone: +447968876440
  - role: membership
    vacant: true
  - role: trees
    vacant: true
  - role: planning
    name: Bill Knight
    phoneDisplay: 83 5144
    phone: +441458835144
  - role: liaison
    name: Ian Tucker
    phoneDisplay: 83 4841
    phone: +441458834841
  - role: website
    vacant: true
  - role: footpaths
    name: Stuart Marsh
    phoneDisplay: 83 4727
    phone: +441458834727
  - role: footpaths
    name: Mike Smyth
    phoneDisplay: 075 3224 0620
    phone: +447532240620
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
