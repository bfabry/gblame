gblame
======

Git blame implementation for light table

Something approximating the :GBlame view from Fugitive.vim (https://github.com/tpope/vim-fugitive), though not nearly as feature packed. That's the only feature of git I ever actually use while inside my editor so I figured I'd churn that out as a learning exercise.

Anyway, not earth-shattering, but at least for me definitely useful.

Thanks Mike Haney for your lein template, I used it here. I noticed you're planning on making a larger scale "git" plugin, once you start that I'd be happy to merge this functionality into it and discontinue this one.

Usage:
======
There's a command for showing/updating the blame display, and another for closing it. Can't get much simpler :-)
Once you have a the blame view to the left, clicking on one will open a diff for that file for that commit.
