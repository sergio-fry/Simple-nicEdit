module ActionView
  module Helpers
    class FormBuilder
      def resizable_text_area(method, options = {})
        options[:class] = "" if options[:class].nil?
        options[:class] += " resizable_text_area"

        text_area(method, options)
      end

      def rich_text_area(method, options = {})
        options[:class] = "" if options[:class].nil?
        options[:class] += " simple_nicedit"

        text_area(method, options)
      end
    end

    module AssetTagHelper 
      def include_nicedit_assets
        javascript_include_tag 'nicEdit', 'nicEditInit'
      end

    end
  end
end


module SimpleNicedit
  module Uploader
    class << self
      def included base #:nodoc:
        base.extend ClassMethods
      end
    end


    module ClassMethods
      def uploads_nicedit_image name, options = {}
        define_method "#{name}" do
          upload_path = RAILS_ROOT + '/public/system/uploads'
          upload_uri = '/system/uploads'

          if request.method == :post
            original_filename = params[:nicImage].original_filename
            extension = original_filename.split('.').last

            hashed_name = Digest::SHA1.hexdigest(Time.now.to_s + original_filename) 
            filename = "#{hashed_name}.#{extension}" 

            file_path = File.join(upload_path, filename)
            File.open(file_path, 'w'){ |f| f.write(params[:nicImage].read) }

            image = Magick::Image::read(file_path).first


            status = {:done => 1, :width => image.columns, :url => File.join(upload_uri, filename)}
            render :text => "<script>top.nicUploadButton.statusCb(#{status.to_json})</script>"
          else
            status = {:noprogress => true}
            render :text => "top.nicUploadButton.statusCb(#{status.to_json})"
          end

        end
      end
    end
  end
end

# Set it all up.
if Object.const_defined?("ActionController")
  ActionController::Base.send(:include, SimpleNicedit::Uploader)
end
