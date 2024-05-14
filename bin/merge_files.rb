require 'fileutils'

directory_glob = ARGV[0]
output_file = ARGV[1]

def merge_files(directory_glob, output_file)
  file_extension = File.extname(output_file)
  files = Dir.glob(directory_glob)
  files = files.select { |file| File.extname(file) == file_extension }

  output_directory = File.dirname(output_file)
  FileUtils.mkdir_p(output_directory) unless File.directory?(output_directory)

  File.open(output_file, 'w') do |output|
    files.each do |file|
      File.open(file, 'r') do |input|
        output.write(input.read)
        output.write("\n\n")
      end
    end
  end

  puts "Files merged successfully into #{output_file}"
end

merge_files(directory_glob, output_file)
