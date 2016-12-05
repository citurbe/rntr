require 'httparty'

class CrimeAdapter
  include HTTParty
  def self.get_crime(address)
    latLong = toLatLong(address)
    crimeData = self.get("https://data.cityofnewyork.us/resource/7x9x-zpz6.json?$where=within_circle(lat_lon, #{latLong["lat"]}, #{latLong["lng"]}, 250)")
    crimeArray = Array(crimeData)
    # JK: For crime count, could do, select, followed by count.      
    crimeCount = crimeArray.each_with_object({violation: 0, misdemeanor: 0, felony:0}) do |crime, total|
      total[:violation] += 1 if crime["law_cat_cd"] == "VIOLATION"
      total[:misdemeanor] += 1 if crime["law_cat_cd"] == "MISDEMEANOR"
      total[:felony] += 1 if crime["law_cat_cd"] == "FELONY"
    end

  end

  private
  def self.toLatLong(address)
    newAddress = address.split(' ').join("+")
    response = self.get("https://maps.googleapis.com/maps/api/geocode/json?address=#{newAddress}&key=AIzaSyAkmquJSszSyTQei0VfZkamDVtODzYK1kE")
    JSON(response.body)["results"][0]["geometry"]["location"]
  end

end
