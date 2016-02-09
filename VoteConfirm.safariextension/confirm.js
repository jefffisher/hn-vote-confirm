var a = document.getElementsByClassName('votearrow');

for (var i = 0; i < a.length; i++)
    a[i].parentNode.onclick = function() { return confirm('Did you mean to ' + this.id.split('_')[0] + 'vote this post?') && vote(this); }
