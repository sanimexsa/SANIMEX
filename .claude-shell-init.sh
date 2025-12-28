# Initialize nvm and add to PATH
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Ensure standard Unix tools are available
export PATH="$HOME/.nvm/versions/node/v24.12.0/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"
