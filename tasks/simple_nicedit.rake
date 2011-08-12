namespace :simple_nicedit do
  desc "Copies assets to public"
  task :install do
    puts "Copying files..."
    public_dir = ::Rails.root.to_s + '/public'

    scripts = Dir[File.join(File.dirname(__FILE__), '..', '/javascripts/*')]
    FileUtils.cp(scripts, public_dir + '/javascripts/')

    scripts = Dir[File.join(File.dirname(__FILE__), '..', '/images/*')]
    FileUtils.cp(scripts, public_dir + '/images/')
    puts "files copied successfully."
  end
end 

