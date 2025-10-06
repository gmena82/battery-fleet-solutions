#!/bin/sh
if [ -z "$husky_skip_init" ]; then
  if [ "$(uname)" = "Darwin" ]; then
    PATH="/usr/local/bin:/opt/homebrew/bin:$PATH"
  fi
  if [ -f ~/.huskyrc ]; then
    . ~/.huskyrc
  fi
fi
