# Install hook code here

puts "Copying files..."

public_dir = RAILS_ROOT + '/public'

scripts = Dir[File.join(File.dirname(__FILE__), '/javascripts/*')]
FileUtils.cp(scripts, public_dir + '/javascripts/')

scripts = Dir[File.join(File.dirname(__FILE__), '/images/*')]
FileUtils.cp(scripts, public_dir + '/images/')

puts "Files copied - Installation complete!"
