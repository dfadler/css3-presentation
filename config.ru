require 'rubygems'
require 'middleman'
require 'haml-coderay'

use Rack::Codehighlighter, :coderay, :element => "pre", :pattern => /\A:::(\w+)\s*\n/


run Middleman.server